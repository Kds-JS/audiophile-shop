export const formatPrice = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num);
  };

  export const preventScroll = (open: boolean) => {
    const body = document.getElementById('body')!;
  
    if (open) {
      body.classList.add('prevent-scroll');
    } else {
      body.classList.remove('prevent-scroll');
    }
  };