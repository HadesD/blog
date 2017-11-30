#include <cppcms/http_request.h>
#include <iostream>

#include "app/core/Kernel.h"
#include "app/routes/Web.hpp"
#include "app/routes/API.hpp"

namespace app { namespace core {
  Kernel::Kernel(cppcms::service &s) : cppcms::application(s)
  {
    attach(new routes::API(s),
      "api",
      "/api{1}",
      "/api((/?.*))",
      1);

    // Web Route must be set at last of Router Lists.
    attach(new routes::Web(s),
      "web",
      "{1}",
      "((/?.*))",
      1);
  }

  void Kernel::main(std::string path)
  {
    try
    {
      cppcms::application::main(path);
    }
    catch(std::exception const &e)
    {
      std::cerr << "Failed: " << e.what() << std::endl;
      std::cerr << booster::trace(e) << std::endl;
    }
  }
} }
