export interface UserDetail {
  username: string;
  age: string;
  gender: string | "MALE" | "FEMALE" | "OTHERS";
  dob: string;
  food: string;
  hobbies?: string;
  createdAt?: Date;
  updatedAt?: Date;
  id: string;
}

export interface UserCardProps {
  handleDeleteUser: Function;
  handleViewUser: Function;
  handleEditUser: Function;
}

export interface UserModalProps {
  isOpen: boolean;
  handleModalClose: Function;
  userDetails?: UserDetail;
  isView?: boolean;
}

export interface ModalProps {
  isModalOpen: boolean;
  handleModalClose: Function;
  children: React.ReactElement;
}
