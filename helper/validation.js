export const validationCheckout = (data)=>{
  const newErrors = {}
  if(!data.name || data.name===''){
      newErrors.name = 'Name must be filled'
  }
  if(!data.address || data.address===''){
      newErrors.address = 'Address must be filled'
  }
  if(!data.phoneNumber || data.phoneNumber===''){
    newErrors.phoneNumber = 'Phone number must be filled'
  }else if(data.phoneNumber.length < 10) {
    newErrors.phoneNumber = 'Phone number must be between 10 and 15 characters'
  }

  if(!data.paymentMethod || data.paymentMethod===''){
      newErrors.paymentMethod = 'Payment method must be filled'
  }
  return newErrors;
}
