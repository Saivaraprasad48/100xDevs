export default function Assignment1() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500 underline">
        Profile component
      </h1>
      <div className="h-[400px] w-[400px] bg-red-200 m-auto mt-5 rounded">
        <div className="bg-blue-200 h-[140px]"></div>
        <div className="relative top-[-58px] left-[140px]">
          <div className="w-[120px] h-[120px] p-4 bg-red-700 rounded-full"></div>
        </div>
        <div className="m-auto">
          <div className="m-auto flex justify-center items-center">
            <h1 className="mr-2"> Name </h1>
            <p> Age </p>
          </div>
          <h1 className="mt-2"> Place </h1>
        </div>
        <hr className="mt-4" />
        <div className="flex flex-row justify-between items-center p-2">
          <div className="flex flex-col items-center container">
            <h1> 100K </h1>
            <p> Followers </p>
          </div>
          <div className="flex flex-col items-center container">
            <h1> 10K </h1>
            <p> Likes </p>
          </div>
          <div className="flex flex-col items-center container">
            <h1> 1.4K </h1>
            <p> photos </p>
          </div>
        </div>
      </div>
    </div>
  );
}
