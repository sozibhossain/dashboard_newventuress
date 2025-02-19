"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useState } from "react";
import BlogGallery from "./BlogGallery";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
});

const AddBlogForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // Add a state to handle the file names
  const [fileNames, setFileNames] = useState<string[]>([]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Combine the form data and the file names (paths)
    const formData = {
      ...data,
      images: fileNames, // Pass the file names (path names) as part of the form data
    };
    console.log(formData); // Log the complete data, including file names (path names)
  };

  return (
    <div className="bg-white rounded-[24px] p-[32px] mb-[60px] ">
      <div
        className={
          "bg-primary px-4 py-3 mb- rounded-t-lg text-white text-[32px] leading-[38px] font-semibold"
        }
      >
        Add Blogs
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-[54px]">
            <div className="w-[58%] space-y-[16px] mt-[60px]">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Title<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter blog title"
                        className="h-[51px] border-[#9C9C9C]"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type Description Here"
                        className="resize-none border-[#9C9C9C] h-[192px]"
                        rows={12}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-[42%] h-full mt-[16px] border border-[#9C9C9C] rounded-lg">
              <BlogGallery setFiles={setFileNames} />
            </div>
          </div>
          <div className="flex justify-end pt-[60px] ">
            <Button type="submit" className="py-[12px] px-[24px] ">
              Post
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddBlogForm;
