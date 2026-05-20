
"use client";

import Container from "@/components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionParagraph from "@/components/ui/SectionParagraph";
import SectionTitle from "@/components/ui/SectionTitle";

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
    console.log(ideaData);
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
                    <ListBox.Item id="AI">
                      AI
                    </ListBox.Item>

                    <ListBox.Item id="Tech">
                      Tech
                    </ListBox.Item>

                    <ListBox.Item id="Education">
                      Education
                    </ListBox.Item>

                    <ListBox.Item id="Health">
                      Health
                    </ListBox.Item>

                    <ListBox.Item id="FinTech">
                      FinTech
                    </ListBox.Item>

                    <ListBox.Item id="Green Energy">
                      Green Energy
                    </ListBox.Item>

                    <ListBox.Item id="E-Commerce">
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