for file in *.json;

do
    node convertJSONToJS.js $file
done

mv *.js ../js
mv ../js/convertJSONToJS.js .
