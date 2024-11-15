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
  if (digitsOnly.length !== 11) {
    return 'Номер телефона не заполнен до конца';
  }
  return '';
};

export const formatPhoneNumber = (value: string): string => {
  // Keep only digits and limit to 11
  const digits = value.replace(/\D/g, '').slice(0, 11);
  
  // Return empty if no digits
  if (!digits.length) return '';
  
  // Format as x (xxx) xxx-xx-xx
  let result = digits[0];
  
  if (digits.length > 1) {
    result += ' (';
    result += digits.slice(1, 4);
    
    if (digits.length > 4) {
      result += ') ';
      result += digits.slice(4, 7);
      
      if (digits.length > 7) {
        result += '-';
        result += digits.slice(7, 9);
        
        if (digits.length > 9) {
          result += '-';
          result += digits.slice(9, 11);
        }
      }
    }
  }
  
  return result;
};