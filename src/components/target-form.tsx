import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TargetFormProps {
  recipientName: string;
  targetRole: string;
  targetCompany: string;
  updateTarget: (recipientName: string, role: string, company: string) => void;
}

export default function TargetForm({
  recipientName,
  targetRole,
  targetCompany,
  updateTarget,
}: TargetFormProps) {
  return (
    <Card className="bg-white border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          Career Goals
        </CardTitle>
        <p className="text-gray-500 pt-1">
          Finally, tell us about the opportunity you're targeting.
        </p>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="recipientName" className="text-black">
            Recipient Name
          </Label>
          <Input
            id="recipientName"
            placeholder="e.g. Sacha Dubois"
            value={recipientName}
            className="text-black"
            onChange={(e) =>
              updateTarget(e.target.value, targetRole, targetCompany)
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="targetRole" className="text-black">
            Target Role
          </Label>
          <Input
            id="targetRole"
            placeholder="e.g. Senior Frontend Developer"
            value={targetRole}
            className="text-black"
            onChange={(e) =>
              updateTarget(recipientName, e.target.value, targetCompany)
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="targetCompany" className="text-black">
            Target Company
          </Label>
          <Input
            id="targetCompany"
            placeholder="Dream company name"
            value={targetCompany}
            onChange={(e) =>
              updateTarget(recipientName, targetRole, e.target.value)
            }
            className="text-black"
          />
        </div>
      </CardContent>
    </Card>
  );
}