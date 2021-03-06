
const Cube = () => {
  return (
    <>
    
      <div className="cube"></div>



      <style jsx>{`
        .cube {
          background-color: var(--primary-yellow);
          width: calc(2rem + 2.5vw);
          height: calc(2rem + 2.5vw);
          margin: 0 calc(1.5rem + 1vw) 0 0;
        }
      `}</style>
    </>
  );
};

export default Cube;
