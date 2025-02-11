const Version = () => {
  return (
    <div className="fixed bottom-8 right-8 text-xs text-gray-500 bg-white rounded-xl px-3 py-1 shadow-2xl shadow-black">
      👾 {import.meta.env.VITE_ENVIRONMENT} v{__APP_VERSION__}
    </div>
  );
};

export default Version;
