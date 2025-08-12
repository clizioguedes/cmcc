import { Calendar, Tag, User } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

type ArticleDetailsProps = {
  documentId: string
}

export function ArticleDetails({ documentId }: ArticleDetailsProps) {
  console.log(documentId)

  return (
    <article className={cn('prose flex max-w-none flex-col')}>
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            <Tag className="mr-1 h-3 w-3" />
            Technology
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
            <Tag className="mr-1 h-3 w-3" />
            Web Development
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
            <Tag className="mr-1 h-3 w-3" />
            React
          </span>
        </div>

        <h1 className="bg-red-400">
          Building Modern Web Applications with Next.js and Tailwind CSS
        </h1>

        <div className="flex flex-col gap-4 bg-sky-400 text-gray-600 sm:flex-row sm:items-center">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Author avatar"
              width={40}
              height={40}
              className="mr-3 rounded-full"
            />
            <div>
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                <span className="font-medium text-gray-900">Sarah Johnson</span>
              </div>
              <div className="text-sm text-gray-500">
                Senior Frontend Developer
              </div>
            </div>
          </div>

          <div className="flex items-center text-sm">
            <Calendar className="mr-1 h-4 w-4" />
            <time dateTime="2024-01-15">January 15, 2024</time>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
        </div>
      </header>

      <div className="bg-red-500">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Modern web development workspace"
          width={800}
          height={400}
          className="h-64 w-full rounded-lg object-cover shadow-lg sm:h-80 lg:h-96"
        />
        <p className="mt-2 text-center text-sm text-gray-500 italic">
          A modern development environment showcasing the power of Next.js and
          Tailwind CSS
        </p>
      </div>

      <div className="prose prose-lg prose-gray max-w-none">
        <p className="lead mb-6 text-xl text-gray-600">
          In today rapidly evolving web development landscape, choosing the
          right tools and frameworks can make the difference between a good
          application and a great one. Lets explore how Next.js and Tailwind CSS
          work together to create exceptional user experiences.
        </p>

        <h2>The Power of Next.js</h2>

        <p>
          Next.js has revolutionized the way we build React applications by
          providing a comprehensive framework that handles many of the
          complexities of modern web development out of the box. From
          server-side rendering to automatic code splitting, Next.js offers
          developers the tools they need to build fast, scalable applications.
        </p>

        <blockquote>
          <p>
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more.
          </p>
        </blockquote>

        <h3>Key Features That Matter</h3>

        <ul>
          <li>
            <strong>Automatic Static Optimization:</strong> Pages are
            automatically optimized for performance
          </li>
          <li>
            <strong>Built-in CSS Support:</strong> Import CSS files directly
            into your components
          </li>
          <li>
            <strong>API Routes:</strong> Build your API endpoints alongside your
            frontend code
          </li>
          <li>
            <strong>Image Optimization:</strong> Automatic image optimization
            for better performance
          </li>
        </ul>

        <figure className="my-8">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Next.js architecture overview"
            width={600}
            height={300}
            className="w-full rounded-lg shadow-md"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-600">
            Next.js architecture showing the relationship between pages, API
            routes, and static generation
          </figcaption>
        </figure>

        <h2>Styling with Tailwind CSS</h2>

        <p>
          Tailwind CSS complements Next.js perfectly by providing a
          utility-first approach to styling. Instead of writing custom CSS, you
          compose designs using pre-built utility classes that can be applied
          directly in your markup.
        </p>

        <h3>Benefits of Utility-First CSS</h3>

        <ol>
          <li>
            <strong>Rapid Development:</strong> Build complex designs without
            leaving your HTML
          </li>
          <li>
            <strong>Consistent Design System:</strong> Built-in design tokens
            ensure consistency
          </li>
          <li>
            <strong>Responsive by Default:</strong> Easy responsive design with
            breakpoint prefixes
          </li>
          <li>
            <strong>Performance:</strong> Only the CSS you use gets included in
            the final bundle
          </li>
        </ol>

        <div className="my-6 rounded-lg bg-gray-100 p-6">
          <h4 className="mb-3 text-lg font-semibold text-gray-900">Pro Tip</h4>
          <p className="mb-0 text-gray-700">
            Use Tailwinds{' '}
            <code className="rounded bg-gray-200 px-2 py-1 text-sm">
              @apply
            </code>{' '}
            directive to extract common utility patterns into custom CSS classes
            when needed. This gives you the best of both worlds: utility-first
            development with the ability to create reusable components.
          </p>
        </div>

        <h2>Bringing It All Together</h2>

        <p>
          When you combine Next.js with Tailwind CSS, you get a powerful
          development stack that enables rapid prototyping and production-ready
          applications. The integration is seamless, and the developer
          experience is exceptional.
        </p>

        <figure className="my-8">
          <Image
            src="/placeholder.svg?height=250&width=500"
            alt="Code editor showing Next.js and Tailwind CSS integration"
            width={500}
            height={250}
            className="w-full rounded-lg shadow-md"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-600">
            Example of Next.js component styled with Tailwind CSS utilities
          </figcaption>
        </figure>

        <h3>Getting Started</h3>

        <p>
          Setting up a new project with Next.js and Tailwind CSS is
          straightforward. The Next.js team has made it incredibly easy to get
          started with their create-next-app tool, which includes Tailwind CSS
          as an option during setup.
        </p>

        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100">
          <code>
            {`npx create-next-app@latest my-app --typescript --tailwind --eslint
            cd my-app
            npm run dev`}
          </code>
        </pre>

        <h2>Conclusion</h2>

        <p>
          The combination of Next.js and Tailwind CSS represents a modern
          approach to web development that prioritizes both developer experience
          and end-user performance. Whether youre building a simple landing page
          or a complex web application, this stack provides the tools and
          flexibility you need to succeed.
        </p>

        <p>
          As we continue to see the web platform evolve, frameworks like Next.js
          and utility-first CSS approaches like Tailwind will likely become even
          more important in helping developers build fast, accessible, and
          maintainable web applications.
        </p>
      </div>

      {/* Author Bio */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex items-start space-x-4">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="Sarah Johnson"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Sarah Johnson
            </h3>
            <p className="mb-2 text-gray-600">Senior Frontend Developer</p>
            <p className="text-sm leading-relaxed text-gray-700">
              Sarah is a passionate frontend developer with over 8 years of
              experience building modern web applications. She specializes in
              React, Next.js, and creating exceptional user experiences. When
              shes not coding, you can find her contributing to open-source
              projects or writing about the latest web technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Related Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200">
            Next.js
          </span>
          <span className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200">
            Tailwind CSS
          </span>
          <span className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200">
            React
          </span>
          <span className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200">
            Web Development
          </span>
          <span className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200">
            Frontend
          </span>
          <span className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200">
            CSS Framework
          </span>
        </div>
      </div>
    </article>
  )
}
