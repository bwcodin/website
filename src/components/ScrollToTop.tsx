'use client';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className='fixed rounded-full h-[75px] w-[75px] text-darkGrey bg-lighBlue text-2xl bottom-7 right-7 flex items-center justify-center z-[9999]'
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
