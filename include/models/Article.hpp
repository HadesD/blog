#ifndef __APP_MODELS_ARTICLE_HPP__
#define __APP_MODELS_ARTICLE_HPP__

#include "../core/Model.hpp"

#include <string>
#include <vector>

namespace app::models
{

  class Article : public app::core::Model
  {
    public:
      enum class Type
      {
        NORMAL = 0,
        TIL,
        QUOTE,
        VIDEO,
        IMAGE,
        COUNT // Alway at last
      };

    public:
      APP_MODEL(Article);

    public:
      Article();
      Article(const std::string& slug);
      Article(const int id);

    public:
      virtual bool save() override;

    public:
      std::vector<Article> getAll();

      struct TypeText
      {
        std::string name;
        std::string format;
        std::string iconClassName;
        std::string featuredClassName;
      };
      static TypeText getTypeText(const Type type);
      TypeText getTypeText();

      std::string getContentHtml();

    private:
      APP_MODEL_SYNTHESIZE(int, id, Id);
      APP_MODEL_SYNTHESIZE(int, type, Type);
      APP_MODEL_SYNTHESIZE(std::string, slug, Slug);
      APP_MODEL_SYNTHESIZE(std::string, featured, Featured);
      APP_MODEL_SYNTHESIZE(std::string, title, Title);
      APP_MODEL_SYNTHESIZE(std::string, content, Content);
      APP_MODEL_SYNTHESIZE(int, author_id, AuthorId);
      APP_MODEL_SYNTHESIZE(std::string, created_at, CreatedAt);
      APP_MODEL_SYNTHESIZE(std::string, updated_at, UpdatedAt);

    private:
      std::string m_contentHtml;
  };

}

#endif

