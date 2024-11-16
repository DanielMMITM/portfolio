import { useAppContext } from '@/context/AppContext';

export const formatDate = (date: string) => {
  const { english } = useAppContext();

  const dateObject = new Date(date);
  const day =
    dateObject.getDate() < 10
      ? `0${dateObject.getDate()}`
      : dateObject.getDate();

  const month =
    dateObject.getMonth() + 1 < 10
      ? `0${dateObject.getMonth() + 1}`
      : dateObject.getMonth() + 1;

  const year = dateObject.getFullYear();

  return english ? `${year}/${month}/${day}` : `${day}/${month}/${year}`;
};
