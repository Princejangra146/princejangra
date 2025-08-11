"use client"

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

// Type for one submission or report
type Submission = {
  id: string;
  user_id: string;
  form_type: string;
  data: any;
  created_at: string;
  current_status: string;
  // ...add more as per your backend
};

type OfficialDashboardProps = {
  level: number; // 1 to 5
};

// Mock session data - replace with your actual session management
const useSession = () => {
  return {
    session: JSON.stringify({ token: 'mock-token' })
  };
};

// Mock URLs - replace with your actual API endpoints
const URLs = {
  baseUrl: '/api/'
};

const OfficialDashboard: React.FC<OfficialDashboardProps> = ({ level }) => {
  const { session } = useSession();
  const { token } = JSON.parse(session || '{}');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        // Fetch only the forms pending at this official's level
        const response = await fetch(
          `${URLs.baseUrl}pending_submissions.php?level=${level}&auth_token=${token}`,
        );
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error('Failed to fetch submissions:', error);
        // Mock data for demonstration
        setSubmissions([
          {
            id: '1',
            user_id: 'user123',
            form_type: 'Leave Application',
            data: { reason: 'Personal leave' },
            created_at: '2024-01-15 10:30:00',
            current_status: 'pending'
          },
          {
            id: '2',
            user_id: 'user456',
            form_type: 'Expense Report',
            data: { amount: 500 },
            created_at: '2024-01-14 15:45:00',
            current_status: 'pending'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, [level, token]);

  // Handler for rejection
  const handleReject = async (id: string, user_id: string) => {
    try {
      const response = await fetch(`${URLs.baseUrl}reject_submission.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, token, level }),
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Rejected",
          description: "Submission rejected successfully.",
        });
        // Optional: Send user notification on the backend here
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
      } else {
        toast({
          title: "Error",
          description: result.error || 'Failed to reject',
          variant: "destructive",
        });
      }
    } catch (e) {
      toast({
        title: "Error",
        description: "Request failed",
        variant: "destructive",
      });
    }
  };

  // Handler for signing/forwarding
  const handleSignForward = async (id: string, user_id: string) => {
    try {
      const response = await fetch(`${URLs.baseUrl}forward_submission.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, token, level }),
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Forwarded",
          description: "Submission signed and sent to next authority.",
        });
        // Optional: Notify user about forwarding on the backend here
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
      } else {
        toast({
          title: "Error",
          description: result.error || 'Failed to forward',
          variant: "destructive",
        });
      }
    } catch (e) {
      toast({
        title: "Error",
        description: "Request failed",
        variant: "destructive",
      });
    }
  };

  // Handler for L5 signing only
  const handleFinalSign = async (id: string, user_id: string) => {
    try {
      const response = await fetch(`${URLs.baseUrl}final_sign_submission.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, token, level }),
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Signed",
          description: "Submission signed/approved successfully.",
        });
        // Optional: Notify user that form is fully approved
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
      } else {
        toast({
          title: "Error",
          description: result.error || 'Failed to sign',
          variant: "destructive",
        });
      }
    } catch (e) {
      toast({
        title: "Error",
        description: "Request failed",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg">Loading submissions...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Official Level {level} Dashboard
      </h1>
      
      <div className="grid gap-6">
        {submissions.map((s) => (
          <Card key={s.id} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{s.form_type}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-sm text-muted-foreground">Submitted by:</label>
                  <p className="text-lg">{s.user_id}</p>
                </div>
                <div>
                  <label className="font-medium text-sm text-muted-foreground">Submitted at:</label>
                  <p className="text-lg">{s.created_at}</p>
                </div>
              </div>
              
              {/* Display more from s.data as needed */}
              {s.data && (
                <div>
                  <label className="font-medium text-sm text-muted-foreground">Form Data:</label>
                  <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                    {JSON.stringify(s.data, null, 2)}
                  </pre>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  variant="destructive"
                  onClick={() => handleReject(s.id, s.user_id)}
                  className="flex-1"
                >
                  Reject
                </Button>
                {level < 5 ? (
                  <Button
                    variant="default"
                    onClick={() => handleSignForward(s.id, s.user_id)}
                    className="flex-1"
                  >
                    Sign & Forward
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    onClick={() => handleFinalSign(s.id, s.user_id)}
                    className="flex-1"
                  >
                    Sign (Final Approval)
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
        
        {submissions.length === 0 && (
          <Card>
            <CardContent className="flex items-center justify-center p-8">
              <p className="text-lg text-muted-foreground">No pending submissions at this level.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default OfficialDashboard;
