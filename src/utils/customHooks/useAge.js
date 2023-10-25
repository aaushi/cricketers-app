
function calculateAge(timestamp) {
  const birthDate = new Date(timestamp);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  return age;
}

function useAge() {
 return (timestamp) => {
   if (timestamp) {
     return calculateAge(timestamp);
   }
   return null;
 };
}

export default useAge;
