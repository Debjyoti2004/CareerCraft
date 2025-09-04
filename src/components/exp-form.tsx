import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface ExperienceFormProps {
  experience: Experience[];
  updateExperience: (experience: Experience[]) => void;
}

export default function ExperienceForm({
  experience,
  updateExperience,
}: ExperienceFormProps) {
  const updateField = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    const updatedExperience = experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    updateExperience(updatedExperience);
  };

  const addExperience = () => {
    updateExperience([
      ...experience,
      { company: '', role: '', duration: '', description: '' },
    ]);
  };

  const removeExperience = (index: number) => {
    updateExperience(experience.filter((_, i) => i !== index));
  };

  return (
    <Card className="bg-white border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          Work Experience
        </CardTitle>
        <p className="text-gray-500 pt-1">
          Detail your professional journey so far.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <AnimatePresence>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
                className="space-y-4 p-4 border rounded-lg relative bg-slate-50"
              >
                {experience.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 hover:bg-red-50"
                    onClick={() => removeExperience(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-black">Company</Label>
                    <Input
                      placeholder="Company name"
                      value={exp.company}
                      onChange={(e) =>
                        updateField(index, 'company', e.target.value)
                      }
                      className="text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-black">Role</Label>
                    <Input
                      placeholder="Job title"
                      value={exp.role}
                      onChange={(e) =>
                        updateField(index, 'role', e.target.value)
                      }
                      className="text-black"
                    />
                  </div>
                </div>
                 <div className="space-y-2">
                    <Label className="text-black">Duration</Label>
                    <Input
                      placeholder="e.g., Jan 2022 - Present"
                      value={exp.duration}
                      onChange={(e) =>
                        updateField(index, 'duration', e.target.value)
                      }
                      className="text-black"
                    />
                  </div>
                <div className="space-y-2">
                  <Label className="text-black">Description</Label>
                  <Textarea
                    placeholder="Describe your responsibilities and achievements"
                    value={exp.description}
                    onChange={(e) =>
                      updateField(index, 'description', e.target.value)
                    }
                    className="h-24 text-black"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={addExperience}
          className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Another Experience
        </Button>
      </CardContent>
    </Card>
  );
}