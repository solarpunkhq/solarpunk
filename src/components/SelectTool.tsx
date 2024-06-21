import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

type SelectToolProps = {
  toolName: string
}
export const SelectTool = ({ toolName }: SelectToolProps) => {
  const map = useMap()
  
  useEffect(() => {
    if (map && map.pm) {
      map.pm.enableDraw(toolName)
    }
  }, [map, toolName])
  
  return null
}
