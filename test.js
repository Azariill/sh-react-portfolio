function App() {
    // You can use this space for other things
    const [currentPage, setCurrentPage] = useState('about');
  
    useEffect(() => {

        renderPage = (currentPage) => {

            switch(currentPage){
                case 'about':
                    return <About/>
                case 'portfolio':
                    return <Portfolio/>
                default: 
                 return <About/>
            }
        }


    },[currentPage])
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className="App">
        <Header
          currentPage={currentPage} 
          handlePageChange={handlePageChange}
        />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    );
  }