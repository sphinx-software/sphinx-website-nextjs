import { SitemapStream, streamToPromise } from 'sitemap'
import type { NextApiRequest, NextApiResponse } from 'next'

type link = {
  url: string
  changefreq: string
  priority: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const links: link[] = [
      { url: '/about', changefreq: 'monthly', priority: 0.5 },
      { url: '/contact', changefreq: 'monthly', priority: 0.5 },
      { url: '/', changefreq: 'monthly', priority: 0.5 },
      { url: '/join-us', changefreq: 'monthly', priority: 0.5 }
    ]
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`
    })

    links.forEach((link) => {
      stream.write(link)
    })
    stream.end()

    const sitemapOutput = (await streamToPromise(stream)).toString()
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    })
    res.end(sitemapOutput)
  } catch (e) {
    res.send(JSON.stringify(e))
  }
}
