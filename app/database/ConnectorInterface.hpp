#ifndef __APP_DATABASE_CONNECTOR_INTERFACE_HPP_
#define __APP_DATABASE_CONNECTOR_INTERFACE_HPP_

#include <string>
#include <vector>

namespace app { namespace database {

  class ConnectorInterface
  {
    public:
      virtual bool connect() = 0;

    public:

      /**
       * Select one column use Id
       *
       * @param {std::string} Column name
       * @param {std::string} Table name
       * @param {std::pair<std::string, W} Specifial to search
       * @return {T} Value of column want to get
       */
      template<typename T, typename W>
        T select(
          const std::string& /* column */,
          const std::string& /* from */,
          const std::pair<std::string, W>& /* where */
          )
        {
        }

      /**
       *
       */
      template<typename T>
        std::vector<T> getAll(
          const std::string& /* orderedList */,
          const unsigned int /* offset */,
          const unsigned int /* limit */
          );

      bool update(const std::vector<std::string>& /* listColumn */);

      virtual bool beginTransaction() = 0;
      virtual bool commit() = 0;
      virtual bool rollBack() = 0;
      virtual bool exec(const std::string& /* statement */) = 0;
  };

} }

#endif

