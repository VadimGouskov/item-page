const items = [
    {   
      id: "ID2",
      title: "TITLE2",
      subtitle: "SUBTITLE2",
      description: "DESCRIPTION2",
    },
    {   
      id: "ID3",
      title: "TITLE3",
      subtitle: "SUBTITLE3",
      description: "DESCRIPTION3",
    }
  ]
  
const fakeApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(items)
      }, 2000)
    })
}

export default fakeApi;