"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function BlogManagementFilter() {
  return (
    <div className="flex items-center bg-white mb-[30px] gap-4 p-4 w-full rounded-[12px]">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Show</span>
        <Select defaultValue="all">
          <SelectTrigger className="py-[9px] px-[10px] bg-primary text-white border-0 [&>svg]:text-white">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="py-[9px] px-[10px] bg-primary text-white border-0  [&>svg]:text-white">
            <SelectValue placeholder="Filter" />
           
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="store1">Published</SelectItem>
            <SelectItem value="store2">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="ml-auto">
        <Button variant="default" className="bg-primary text-white ">
          Bulk Delete
        </Button>
      </div>
    </div>
  )
}

