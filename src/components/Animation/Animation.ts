export const compVariants = {
    initial:{
        opacity:0,
        y: 20,
    },
    final:{
        opacity:1,
        y: 0,
        transition:{
            duration: 0.6
        }
    },
    exit: {
      opacity:0,
      y: -20,
      transition:{
        duration: 0.6
      } 
    }
}