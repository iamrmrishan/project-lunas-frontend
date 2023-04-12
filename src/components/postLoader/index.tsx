import Skeleton  from 'react-loading-skeleton';

const PostLoader = () => {
  return (
    <div className="space-y-6">
      <div className="p-10 bg-white rounded shadow-lg">
        {/* <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" /> */}
        {/* <Skeleton mt="4" height="200px" /> */}
      </div>
      <div className="p-10 bg-white rounded shadow-lg">
        {/* <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Skeleton mt="4" height="200px" /> */}
      </div>
    </div>
  );
};

export default PostLoader;