import Layout from '../components/template/Layout'

import useAppData from '../data/hook/useAppData';

export default function Home() {
  const ctx = useAppData();

  return (
    <Layout titulo="Notificações" subtitulo="Em construção!">
      <h3>{ctx.nome}</h3>
    </Layout>
  );
}
