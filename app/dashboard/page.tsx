import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return (
    <>
    <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            aaa
            bbb
            <div className="ml-auto flex items-center space-x-4">
              ccc
              ddd
            </div>
          </div>
        </div>
    </div>     
    </>
  )
}