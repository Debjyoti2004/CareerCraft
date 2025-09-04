import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface EducationFormProps {
  education: Education;
  updateEducation: (education: Education) => void;
}

export default function EducationForm({
  education,
  updateEducation,
}: EducationFormProps) {
  const updateField = (field: keyof Education, value: string) => {
    updateEducation({ ...education, [field]: value });
  };

  return (
    <Card className="bg-white border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          Education
        </CardTitle>
        <p className="text-gray-500 pt-1">
          Tell us about your academic background.
        </p>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="degree" className="text-black">
            Degree
          </Label>
          <Input
            id="degree"
            placeholder="e.g. Bachelor of Technology"
            value={education.degree}
            onChange={(e) => updateField('degree', e.target.value)}
            className="text-black"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="institution" className="text-black">
            Institution
          </Label>
          <Input
            id="institution"
            placeholder="University name"
            value={education.institution}
            onChange={(e) => updateField('institution', e.target.value)}
            className="text-black"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year" className="text-black">
            Graduation Year
          </Label>
          <Input
            id="year"
            type="text"
            placeholder="e.g. 2026"
            value={education.year}
            onChange={(e) => updateField('year', e.target.value)}
            className="text-black"
          />
        </div>
      </CardContent>
    </Card>
  );
}