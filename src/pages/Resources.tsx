
import ResourcesMenu from '@/components/resources/ResourcesMenu';

const Resources: React.FC = () => {
  return (
    <div className='flex flex-col min-h-min'>
      
      <main className="flex-grow">
        <ResourcesMenu/>
      </main>
      
    </div>
  )
}

export default Resources
