import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { upperFirst } from 'lodash'
import * as ModulesComponents from '../../modules'

function resolveSections(module) {
  // eslint-disable-next-line import/namespace
  const Module = ModulesComponents[module._type]

  if (Module) {
    return Module
  }

  console.error('Cant find section', module) // eslint-disable-line no-console
  return null
}

function RenderModules(props) {
  const { modules, location } = props

  if (!modules) {
    console.error('Missing section')
    return <div>Missing modules</div>
  }

  return (
    <React.Fragment>
      {modules.map(module => {
        const ModuleComponent = resolveSections(module)
        if (!ModuleComponent) {
          return <div>Missing module {module._type}</div>
        }
        return (
          <div className={module._type}>
            <ModuleComponent {...module} location={location} key={module._key} />
          </div>
        )
      })}
    </React.Fragment>
  )
}

RenderModules.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      module: PropTypes.instanceOf(PropTypes.object)
    })
  )
}

export default RenderModules
