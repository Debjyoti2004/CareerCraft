import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Calendar } from 'lucide-react';

interface PersonalInfoProps {
  name: string;
  updateName: (name: string) => void;
  age: number | null;
  updateAge: (age: number | null) => void;
}

export default function PersonalInfo({
  name,
  age,
  updateName,
  updateAge,
}: PersonalInfoProps) {
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // This regex removes any character that is not a digit (0-9)
    const numericValue = e.target.value.replace(/[^0-9]/g, '');

    // Allow the field to be empty
    if (numericValue === '') {
      updateAge(null);
    } else {
      updateAge(Number.parseInt(numericValue, 10));
    }
  };

  return (
    <Card className="bg-white border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          Personal Information
        </CardTitle>
        <p className="text-gray-500 pt-1">
          Please provide your basic details to get started.
        </p>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-black">
            Full Name
          </Label>
          <div className="relative flex items-center">
            <User className="absolute left-3 h-5 w-5 text-gray-400" />
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => updateName(e.target.value)}
              className="h-10 text-gray-900 pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="age" className="text-black">
            Age
          </Label>
          <div className="relative flex items-center">
            <Calendar className="absolute left-3 h-5 w-5 text-gray-400" />
            <Input
              id="age"
              type="text" 
              inputMode="numeric" 
              pattern="[0-9]*"
              placeholder="Enter your age"
              value={age === null ? '' : age}
              onChange={handleAgeChange}
              className="h-10 text-gray-900 pl-10"
              required
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}