'use client'
import dynamic from 'next/dynamic';

function genRandomTree(N = 300, reverse = false) {
    return {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
        links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
      }))
    };
  }

const Libg = dynamic(() => import('./libg'), {
  ssr: false,
});


export default function NoSSRForceGraph(){
    return (

        <Libg
            graphData={genRandomTree()}
            nodeLabel="id"
            nodeAutoColorBy="group"
            linkDirectionalParticles="value" />

    )
}
