import React, { useState } from 'react';
import { validateName, validatePhone, formatPhoneNumber } from '../../../utils/validation';

interface FormState {
  name: string;
  phone: string;
  checkbox: boolean;
}

interface FormErrors {
  name: string;
  phone: string;
  checkbox: boolean;
}

interface FormValidatorProps {
  onSubmit: (formData: FormState) => void;
  children: (props: {
    formData: FormState;
    errors: FormErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isSubmitted: boolean;
  }) => React.ReactNode;
  isSubmitted?: boolean;
  setIsSubmitted?: (value: boolean) => void;
}

export const FormValidator: React.FC<FormValidatorProps> = ({
  children,
  onSubmit,
  isSubmitted = false,
  setIsSubmitted
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    checkbox: false
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    phone: '',
    checkbox: false
  });

  const handleChange = (e: any) => {
    const { name, value, type } = e.target;

    if (name === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }));
      setErrors((prev) => ({ ...prev, [name]: !e.target.value }));
      return;
    }

    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [name]: formattedPhone }));
      setErrors(prev => ({ ...prev, [name]: validatePhone(formattedPhone) }));
    } 
    
    if (name === 'name') {
      setFormData(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: validateName(value) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);

    setErrors(prev => ({
      ...prev,
      name: nameError,
      phone: phoneError,
      checkbox: !formData.checkbox
    }));

    if (!nameError && !phoneError && formData.checkbox) {
      onSubmit(formData);
      setIsSubmitted?.(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        checkbox: false
      });
    }
  };

  console.log(formData)

  return children({
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitted
  });
}; 