import Header from 'components/SiteHeader';
import Filters from 'components/SearchFilters';
import Propertycard from 'components/PropertyCard';

export default function Home() {
  return (   
    <div id="app" className=" min-h-screen  bg-gray-200 antialiased xl:flex  xl:flex-col  xl:h-screen">
    <Header className="xl:flex-shrink-0"/> 
    <div className="xl:flex-1  xl:flex xl:overflow-y-hidden"> 
    <Filters/> 
        <main className="py-6  xl:flex-1  xl:overflow-x-hidden">
           <div className="px-4">
           <h3 className="text-gray-900 text-xl">Los Angeles</h3>
            <p className="text-gray-600">Live like the stars in these luxurious Southern California estates</p>
           </div>
        <div className="mt-6  sm:px-4  sm:overflow-x-auto"> 
        <div className="px-4  sm:flex sm:px-4 sm:-ml-2  sm:pb-8">
 
   { [...Array(4)].map((_, index) => 
 <div >
 <Propertycard/> 
 </div>
 ) }
      
  

    </div>
    </div>
  
        </main> 
        </div>
</div>     
  )
}

