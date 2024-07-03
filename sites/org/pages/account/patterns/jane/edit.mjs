/*
 * This page is auto-generated. Do not edit it by hand.
 */
import { Jane } from 'designs/jane/src/index.mjs'
// Dependencies
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { nsMerge, getSearchParam } from 'shared/utils.mjs'
// Hooks
import { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'next-i18next'
import { useBackend } from 'shared/hooks/use-backend.mjs'
// Context
import { LoadingStatusContext } from 'shared/context/loading-status-context.mjs'
// Components
import { PageWrapper, ns as pageNs } from 'shared/components/wrappers/page.mjs'
import { Workbench, ns as wbNs } from 'shared/components/workbench/new.mjs'
import { WorkbenchLayout } from 'site/components/layouts/workbench.mjs'
import { Loading } from 'shared/components/spinner.mjs'

// Translation namespaces used on this page
const ns = nsMerge('jane', wbNs, pageNs)

const EditDesignComponent = ({ id, design, Design, settings }) => (
  <Workbench preload={{ settings }} saveAs={{ pattern: id }} {...{ design, Design }} />
)

const EditJanePage = ({ page }) => {
  const { setLoadingStatus } = useContext(LoadingStatusContext)
  const backend = useBackend()
  const { t } = useTranslation(ns)

  const [pattern, setPattern] = useState(false)

  useEffect(() => {
    const getPattern = async () => {
      setLoadingStatus([true, t('backendLoadingStarted')])
      let result
      try {
        result = await backend.getPattern(id)
        if (result.success) {
          setPattern(result.data.pattern)
          setLoadingStatus([true, 'backendLoadingCompleted', true, true])
        } else setLoadingStatus([true, 'backendError', true, false])
      } catch (err) {
        console.log(err)
        setLoadingStatus([true, 'backendError', true, false])
      }
    }
    const id = getSearchParam('id')
    if (id) getPattern()
  }, [backend, setLoadingStatus, t])

  return (
    // prettier-ignore
    <PageWrapper {...page} title="Jane" layout={pattern ? WorkbenchLayout : false} header={null}>
      {pattern ? (
        <EditDesignComponent
          id={pattern.id}
          settings={pattern.settings}
          design="jane"
          Design={Jane}
        />
      ) : (
        <div>
          <h1>{t('account:oneMomentPLease')}</h1>
          <Loading />
        </div>
      )}
    </PageWrapper>
  )
}

export default EditJanePage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      page: {
        locale,
        path: ['account', 'patterns', 'jane'],
        title: 'Jane',
      },
    },
  }
}