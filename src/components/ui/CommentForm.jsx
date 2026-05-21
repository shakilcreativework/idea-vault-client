"use client";

import {
  Button,
  FieldError,
  Form,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const CommentForm = ({ ideaId }) => {

  const { data: session } = authClient.useSession();

  // ==========================================
  // Submit Comment
  // ==========================================
  const handleComment = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const commentText = formData.get("comment");

    const commentData = {
      ideaId,
      comment: commentText,

      userName: session?.user?.name,
      userEmail: session?.user?.email,
      userImage: session?.user?.image,
    };

    console.log(commentData);

    try {
      const res = await fetch("http://localhost:5000/comments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      const data = await res.json();

      if (data?.insertedId) {
        toast.success("Comment added!");

        e.target.reset();
      }

    } catch (error) {
      console.log(error);
      toast.error("Failed to add comment");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md">

      <Form
        onSubmit={handleComment}
        className="w-full"
      >
        <TextField
          isRequired
          name="comment"
          className="w-full"
        >
          <Label>Write Comment</Label>

          <TextArea
            placeholder="Share your thoughts about this startup idea..."
            className="rounded-xl mt-2"
          />

          <FieldError />
        </TextField>

        <Button
          type="submit"
          className="
            mt-4 rounded-xl text-white
            bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]
          "
        >
          Post Comment
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;