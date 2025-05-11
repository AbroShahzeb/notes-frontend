import { useForm } from "react-hook-form";
import {
  ArrowLeftIcon,
  ClockIcon,
  TagIcon,
} from "../../../../../assets/svgAssets";
import { Button } from "../../../../../components";
import { zodResolver } from "@hookform/resolvers/zod";
import { NoteSchema, noteSchema } from "../../../../../lib/validations";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { createNote, updateNote } from "../../../../../api/notes";
import { useQueryClient } from "@tanstack/react-query";
import { successToast } from "../../../../../components/ui/toast";

export interface INote {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  updatedAt?: string;
  isArchived: boolean;
}
interface Props {
  isEdit?: boolean;
  note?: INote | null;
  archived?: boolean;
}

export const NoteForm = ({
  isEdit = false,
  note = null,
  archived = false,
}: Props) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<NoteSchema>({
    defaultValues: {
      title: "Enter a title...",
      content: "Start typing your note here…",
      tags: "",
    },
    resolver: zodResolver(noteSchema),
  });

  useEffect(() => {
    if (isEdit && note) {
      reset({
        title: note?.title,
        content: note?.content,
        tags: note?.tags.map((tag) => tag.name).join(", "),
      });
    }
  }, [note, reset, isEdit]);

  const { mutate: createNoteMutation, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      successToast("", "Note saved successfully");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutate: updateNoteMutation, isPending: isUpdating } = useMutation({
    mutationFn: updateNote,
    onSuccess: (data) => {
      console.log("Data", data);
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const onSubmit = (data: NoteSchema) => {
    const noteData = {
      _id: isEdit ? note?._id : undefined,
      title: data.title,
      content: data.content,
      tags:
        typeof data.tags === "string"
          ? data.tags.split(",").map((tag) => tag.trim())
          : data.tags.map((tag) => tag.name),
      isArchived: archived,
    };

    if (isEdit) {
      updateNoteMutation(noteData as INote);
    } else {
      createNoteMutation(noteData as INote);
    }
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    reset();
    navigate(-1);
  };
  return (
    <form
      className="px-6 py-5 flex flex-col gap-4 h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center gap-4 justify-between lg:hidden text-preset-4 pb-4 border-b border-neutral-200 dark:border-neutral-700">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-secondary-text gap-1"
          >
            <span>
              <ArrowLeftIcon width={18} height={18} />
            </span>
            Back
          </button>
        </div>
        <div className="flex items-center gap-4 ">
          <button onClick={handleCancel}>Cancel</button>
          <button className="text-blue-500">Save Note</button>
        </div>
      </div>
      <div>
        <input
          className="text-preset-1 text-primary-text focus:outline-none font-bold w-full"
          {...register("title")}
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <div className="py-1 shrink-0 w-[115px] flex items-center gap-1.5 text-secondary-text text-preset-4">
            <TagIcon width={16} height={16} />
            <span>Tags</span>
          </div>
          <input
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
            className="placeholder:text-secondary-text w-full text-primary-text text-preset-4 focus:outline-none"
            {...register("tags")}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="py-1 w-[115px] flex items-center gap-1.5 text-secondary-text text-preset-4">
            <ClockIcon width={16} height={16} />
            <span>Last Edited</span>
          </div>
          <p className="text-secondary-text text-preset-4">
            {note?.updatedAt
              ? new Date(note.updatedAt).toLocaleDateString()
              : "Not yet saved"}
          </p>
        </div>
      </div>

      {/* Separator  */}
      <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800"></div>

      <div className="flex-1">
        <textarea
          className="w-full h-full focus:outline-none"
          {...register("content")}
        >
          What's on your mind?
        </textarea>
      </div>

      <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800 hidden lg:block"></div>

      <div className="lg:flex items-center gap-4 hidden">
        <Button
          type="submit"
          label={isPending || isUpdating ? "Saving..." : "Save Note"}
          disabled={isPending || isUpdating}
        />
        <Button variant="secondary" label="Cancel" />
      </div>
    </form>
  );
};
