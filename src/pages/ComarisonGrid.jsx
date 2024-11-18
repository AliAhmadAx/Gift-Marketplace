import ComparisonList from "./ComparisonList";

const ComparisonGrid = () => {
  return (
    <div className="w-full pb-20 flex justify-center mt-5 lg:mt-28 min-h-[80vh] ">
      <div className="w-full lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 divide-y-2 lg:divide-x-2 lg:divide-y-0">
        <ComparisonList elementId={"suggestion1"} />
        <ComparisonList elementId={"suggestion2"} />
      </div>
    </div>
  );
};

export default ComparisonGrid;
