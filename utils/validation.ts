export const validateName = (name: string): string => {
  if (name.trim().length < 2) {
    return 'Имя должно содержать не менее 2 символов';
  }
  // Updated regex to allow common name characters including hyphens, apostrophes, and periods
  if (!/^[A-Za-zА-Яа-я\s'\-\.]+$/.test(name.trim())) {
    return 'Имя может содержать только буквы и пробелы';
  }
  return '';
};

export const validatePhone = (phone: string): string => {
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 6) {
    return 'Номер телефона слишком короткий';
  }
  if (digitsOnly.length > 20) {
    return 'Номер телефона слишком длинный';
  }
  return '';
};

export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return 'Email обязателен для заполнения';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Введите корректный email';
  }
  return '';
};

export function formatPhoneNumber(input: string): string {
  if (!input) return '';

  // Remove all non-digit characters
  const digits = input.replace(/\D/g, '');
  if (!digits) return '';

  // For unknown country codes, just add + prefix without formatting
  return digits;
}