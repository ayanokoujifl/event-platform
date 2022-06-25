import { gql, useQuery } from '@apollo/client'
import { Key } from 'react'
import { Lesson } from './Lesson'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      availableAt
      id
      slug
      title
      lessonType
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}

export function SideBar() {
  const { data } = useQuery(GET_LESSONS_QUERY)
  console.log(data)
  return (
    <aside className="w-[345px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(
          (lesson: {
            id: Key | null | undefined
            title: string
            slug: string
            availableAt: string | number | Date
            lessonType: 'live' | 'class'
          }) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            )
          }
        )}
      </div>
    </aside>
  )
}
