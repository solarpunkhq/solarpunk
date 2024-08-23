import { Button } from '../ui/button'
import Schedule from './Schedule'

export default function DashboardSidebar() {
  return (
    <div className="relative mb-4 flex-col overflow-x-auto text-sm">
      <div className="mb-4">
        Please submit additional information about your land. This information
        will help us process your application faster.
      </div>
      <Schedule />
      <div>more</div>
      <Button className="mx-auto mt-4 !px-5 !py-3">'Submit'</Button>
    </div>
  )
}
