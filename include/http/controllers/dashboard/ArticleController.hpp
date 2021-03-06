#ifndef __APP_HTTP_CONTROLLERS_DASHBOARD_ARTICLE_CONTROLLER_HPP__
#define __APP_HTTP_CONTROLLERS_DASHBOARD_ARTICLE_CONTROLLER_HPP__

#include "../../../core/Controller.hpp"

namespace app::http::controllers::dashboard
{

  class ArticleController : public app::core::Controller
  {
    public:
      ArticleController(cppcms::service &s);

    public:
      void index();
      void update(const int id);
      void update(const std::string& slug);
      void createNew();
  };

}

#endif

