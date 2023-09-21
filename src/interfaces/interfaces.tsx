export interface UserCardProps {
  username: String;
  age: number;
  gender: String | "MALE" | "FEMALE" | "OTHERS";
  dob: Date;
  food: String;
  hobbies?: String;
  createdAt: Date;
  updatedAt?: Date;
}

export interface UserModalProps {
  isOpen: boolean;
  handleModalClose: Function;
}

export interface ModalProps {
  isModalOpen: boolean;
  handleModalClose: Function;
  children: React.ReactElement;
}
