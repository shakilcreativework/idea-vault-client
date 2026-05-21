"use client";


import { Select, Button, FieldError, Form, Input, Label, ListBox, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdOutlineModeEditOutline } from "react-icons/md";

export function UpdateModal({ ideaInfo }) {
    const router = useRouter();
    // ==========================================
    // Destructure Idea Data
    // ==========================================
    const {
        _id,
        ideaTitle,
        category,
        estimatedBudget,
        targetAudience,
        tags,
        imageURL,
        shortDescription,
        detailedDescription,
        problemStatement,
        proposedSolution,
    } = ideaInfo;

    // ==========================================
    // Handle Form Submit
    // ==========================================
    const onSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const ideaData = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/add-ideas/${_id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ideaData)
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {

        toast.success("Idea updated successfully");

        router.refresh();
    }
};

    return (
        <Modal>
            <Button variant="secondary"><MdOutlineModeEditOutline className="text-lg" /> Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="max-w-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form
                                    onSubmit={onSubmit}
                                    className="space-y-8"
                                >

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                                        {/* ==========================================
                                            Idea Title
                                        ========================================== */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={ideaTitle} isRequired name="ideaTitle">
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
                                                defaultValue={category}
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
                                        <TextField defaultValue={estimatedBudget} isRequired name="estimatedBudget">
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
                                            <TextField defaultValue={targetAudience} name="targetAudience">
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
                                            <TextField defaultValue={tags} name="tags">
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
                                            <TextField defaultValue={imageURL} name="imageURL">
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
                                            <TextField defaultValue={shortDescription} name="shortDescription">
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
                                            <TextField defaultValue={detailedDescription} name="detailedDescription">
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
                                            <TextField defaultValue={problemStatement} name="problemStatement">
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
                                            <TextField defaultValue={proposedSolution} name="proposedSolution">
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
                                    {/* <Modal.Footer>
                                        <Button slot="close">Update</Button>
                                    </Modal.Footer> */}
                                </Form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}