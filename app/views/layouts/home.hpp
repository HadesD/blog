#ifndef _APP_VIEWS_LAYOUTS_APP_HOME_H_
#define _APP_VIEWS_LAYOUTS_APP_HOME_H_

#include "app/views/layouts/master.hpp"

#include <ctime>

namespace app { namespace views { namespace layouts {

  struct Home : public app::views::layouts::Master
  {
    std::tm getDate();
  };

} } }

#endif