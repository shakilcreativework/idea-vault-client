const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#FFF7ED]">
      <div className="flex items-center gap-3 text-sm text-[#6B7280] font-medium">
        <span className="loading loading-spinner text-success w-6 h-6"></span>
        <span>Loading, please wait...</span>
      </div>
    </div>
  );
};

export default Loading;