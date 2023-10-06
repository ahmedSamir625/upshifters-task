import category from "../../assets/category.svg";

const CategoryTag = () => {
  return (
    <div className="bg-[#F2F4F7] rounded-full px-[10px] pt-[4px] min-w-[70px] w-[70px] mt-2">
      <img src={category} alt="category" />
    </div>
  );
};

export default CategoryTag;
