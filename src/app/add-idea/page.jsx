
"use client";

import Container from "@/components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionParagraph from "@/components/ui/SectionParagraph";
import SectionTitle from "@/components/ui/SectionTitle";
import { authClient } from "@/lib/auth-client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

import { WiStars } from "react-icons/wi";

const AddIdeaPage = () => {
  const { data: session, error } = authClient.useSession();
  // console.log(session?.user?.email);

  // ==========================================
  // Handle Form Submit
  // ==========================================
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const ideaData = Object.fromEntries(formData.entries());

    // Convert tags string to array
    ideaData.tags = ideaData.tags
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag !== "");

    // idea data with user information
    const addIdeaData = {
      ...ideaData,
      userEmail: session?.user?.email,
      userName: session?.user?.name,
      userImage: session?.user?.image,
    }
    // console.log(addIdeaData);

    const res = await fetch('http://localhost:5000/add-ideas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addIdeaData)
    });

    const data = await res.json();
    console.log('data', data, typeof data);
  };

  return (
    <section className="py-20">
      <Container className={"max-w-5xl"}>

        {/* ==========================================
            Section Header
        ========================================== */}
        <div className="space-y-3 mb-10">
          <SectionBadge
            text={"Share your vision"}
            icon={<WiStars />}
            iconClass={"text-xl"}
          />

          <div className="space-y-2">
            <SectionTitle text={"Add a new startup idea"} />

            <SectionParagraph
              para={
                "The clearer your startup idea is, the better feedback and support you'll receive from the community."
              }
            />
          </div>
        </div>

        {/* ==========================================
            Add Idea Form
        ========================================== */}
        <Form
          onSubmit={onSubmit}
          className="space-y-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            {/* ==========================================
                Idea Title
            ========================================== */}
            <div className="md:col-span-2">
              <TextField isRequired name="ideaTitle">
                <Label>Idea Title</Label>

                <Input
                  placeholder="AI Study Planner for Students"
                  
                />

                <FieldError />
              </TextField>
            </div>

            {/* ==========================================
                Category
            ========================================== */}
            <div>
              <Select
                name="category"
                placeholder="Select category"
                isRequired
              >
                <Label>Category</Label>

                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="AI" textValue="AI">
                      AI
                    </ListBox.Item>

                    <ListBox.Item id="Tech" textValue="Tech">
                      Tech
                    </ListBox.Item>

                    <ListBox.Item id="Education" textValue="Education">
                      Education
                    </ListBox.Item>

                    <ListBox.Item id="Health" textValue="Health">
                      Health
                    </ListBox.Item>

                    <ListBox.Item id="FinTech" textValue="FinTech">
                      FinTech
                    </ListBox.Item>

                    <ListBox.Item id="Green Energy" textValue="Green Energy">
                      Green Energy
                    </ListBox.Item>

                    <ListBox.Item id="E-Commerce" textValue="E-Commerce">
                      E-Commerce
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* ==========================================
                Estimated Budget
            ========================================== */}
            <TextField isRequired name="estimatedBudget">
              <Label>Estimated Budget</Label>

              <Input
                placeholder="$15K MVP"
              />

              <FieldError />
            </TextField>

            {/* ==========================================
                Target Audience
            ========================================== */}
            <div className="md:col-span-2">
              <TextField  name="targetAudience">
                <Label>Target Audience</Label>

                <Input
                  placeholder="Students, freelancers, startup founders"
                  
                />

                <FieldError />
              </TextField>
            </div>

            {/* ==========================================
                Tags
            ========================================== */}
            <div className="md:col-span-2">
              <TextField name="tags">
                <Label>Tags</Label>

                <Input
                  placeholder="ai, productivity, students"
                  
                />

                <FieldError />
              </TextField>
            </div>

            {/* ==========================================
                Image URL
            ========================================== */}
            <div className="md:col-span-2">
              <TextField  name="imageURL">
                <Label>Image URL</Label>

                <Input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  
                />

                <FieldError />
              </TextField>
            </div>

            {/* ==========================================
                Short Description
            ========================================== */}
            <div className="md:col-span-2">
              <TextField  name="shortDescription">
                <Label>Short Description</Label>

                <TextArea
                  placeholder="Write a short summary about your startup idea..."
                  
                />

                <FieldError />
              </TextField>
            </div>

            {/* ==========================================
                Detailed Description
            ========================================== */}
            <div className="md:col-span-2">
              <TextField  name="detailedDescription">
                <Label>Detailed Description</Label>

                <TextArea
                  placeholder="Explain your startup idea in detail..."
                  
                />

                <FieldError />
              </TextField>
            </div>

            {/* ==========================================
                Problem Statement
            ========================================== */}
            <div className="md:col-span-2">
              <TextField  name="problemStatement">
                <Label>Problem Statement</Label>

                <TextArea
                  placeholder="What problem are you trying to solve?"
                  
                />

                <FieldError />
              </TextField>
            </div>

            {/* ==========================================
                Proposed Solution
            ========================================== */}
            <div className="md:col-span-2">
              <TextField  name="proposedSolution">
                <Label>Proposed Solution</Label>

                <TextArea
                  placeholder="Describe your solution..."
                  
                />

                <FieldError />
              </TextField>
            </div>
          </div>

          {/* ==========================================
              Submit Button
          ========================================== */}
          <Button
            type="submit"
            className="
              w-full rounded-md py-6 text-white font-medium
              bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]
            "
          >
            Submit Startup Idea
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default AddIdeaPage;