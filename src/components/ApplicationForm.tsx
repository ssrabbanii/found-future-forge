
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  background: z.enum(["technical", "business", "both"], {
    required_error: "Please select your background",
  }),
  idea: z.string().min(50, "Please provide more details about your idea (minimum 50 characters)"),
  motivation: z.string().min(50, "Please elaborate on your motivation (minimum 50 characters)"),
});

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationForm = ({ isOpen, onClose }: ApplicationFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      background: undefined,
      idea: "",
      motivation: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // Here you would typically send the data to your backend
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-4xl font-playfair mb-2 text-ef-primary">
            Join the Future of Innovation
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-600">
            We're excited to learn more about you and your vision. Let's begin this journey together.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ef-secondary font-medium">First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Jane" 
                        className="bg-white/50 border-ef-secondary/20 focus:border-ef-primary"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ef-secondary font-medium">Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Doe" 
                        className="bg-white/50 border-ef-secondary/20 focus:border-ef-primary"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-ef-secondary font-medium">Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="jane@example.com" 
                      className="bg-white/50 border-ef-secondary/20 focus:border-ef-primary"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="background"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-ef-secondary font-medium">Your Background</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="technical" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Technical (Engineering, Data Science, etc.)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="business" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Business (Sales, Marketing, Operations)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="both" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Both Technical & Business
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="idea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-ef-secondary font-medium">Your Startup Idea</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your idea and the problem you're solving..."
                      className="min-h-[100px] bg-white/50 border-ef-secondary/20 focus:border-ef-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-ef-secondary font-medium">Why Entrepreneurs First?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What motivates you to join our community?"
                      className="min-h-[100px] bg-white/50 border-ef-secondary/20 focus:border-ef-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-ef-primary hover:bg-ef-primary/90 text-white py-6 text-lg"
            >
              Submit Application
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
