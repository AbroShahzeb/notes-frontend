import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const getAllNotes = async (archived: boolean) => {
  try {
    const response = await axios.get(`${baseUrl}/notes`, {
      params: { archived },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createNote = async (note: {
  title: string;
  content: string;
  tags: string[];
}) => {
  try {
    const response = await axios.post(`${baseUrl}/notes`, note, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNoteById = async (id: string) => {
  try {
    const response = await axios.get(`${baseUrl}/notes/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateNote = async (note: {
  _id: string;
  title: string;
  content: string;
  tags: string[];
}) => {
  try {
    const response = await axios.patch(`${baseUrl}/notes/${note._id}`, note, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const archiveNote = async (id: string) => {
  try {
    const response = await axios.patch(
      `${baseUrl}/notes/${id}`,
      {
        isArchived: true,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteNote = async (id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/notes/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
