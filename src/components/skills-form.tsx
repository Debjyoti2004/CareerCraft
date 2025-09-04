// components/skills-form.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillsFormProps {
  skills: string[];
  updateSkills: (skills: string[]) => void;
}

export default function SkillsForm({ skills, updateSkills }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState('');
  const [error, setError] = useState('');

  const addSkill = () => {
    const trimmedSkill = newSkill.trim();
    if (!trimmedSkill) {
      setError('Skill cannot be empty.');
      return;
    }
    if (skills.includes(trimmedSkill)) {
      setError('This skill has already been added.');
      return;
    }
    updateSkills([...skills, trimmedSkill]);
    setNewSkill('');
    setError('');
  };

  const removeSkill = (skillToRemove: string) => {
    updateSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    // The main container div is no longer needed here as the parent page handles it.
    <>
      {/* This header is now part of the parent component's structure, 
          but if you need it per-component, you can uncomment it. */}
      {/* <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Showcase Your Skills
            </h1>
            <p className="text-gray-500 mt-1">
              Step 2 of 5 - Add your technical abilities
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: '40%' }}
          ></div>
        </div>
      </div> 
      */}

      <Card className="bg-white border-0 shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Technical Skills
          </CardTitle>
          <p className="text-gray-500 pt-1">
            Add skills that highlight your expertise.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2 items-start">
            <div className="flex-grow">
              <Input
                placeholder="Add a skill (e.g. JavaScript)"
                value={newSkill}
                onChange={(e) => {
                  setNewSkill(e.target.value);
                  if (error) setError('');
                }}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                className={`text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${
                  error ? 'border-red-500 focus:border-red-500' : ''
                }`}
              />
              {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
              )}
            </div>
            <Button
              onClick={addSkill}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Add
            </Button>
          </div>

          <div className="min-h-[80px] rounded-lg bg-slate-50 p-4 border">
            <div className="flex flex-wrap gap-2">
              <AnimatePresence>
                {skills.length > 0 ? (
                  skills.map((skill) => (
                    <motion.div
                      key={skill}
                      layout
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2 text-sm py-2 px-3 bg-blue-600 text-white rounded-md cursor-default"
                    >
                      <span>{skill}</span>
                      <button
                        onClick={() => removeSkill(skill)}
                        className="p-0.5 rounded-full hover:bg-blue-500 transition-colors"
                        aria-label={`Remove ${skill}`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 w-full text-center py-4">
                    Your skills will appear here
                  </p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}